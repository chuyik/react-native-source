__d("FBAbstractEntityListPopover",["FBSpinner","FBActorRow","FIGColors","Image","InfiniteScrollView","Popover","React","ReactGraphQL","StyleSheet","Text","TouchableBounce","View","clamp","fbt","keyOf"],function (e, t, n, r, i) {
    "use strict";
    var FBSpinner/*o*/ = t("FBSpinner"),
        FBActorRow/*a*/ = t("FBActorRow"),
        FIGColors/*s*/ = t("FIGColors"),
        l = (t("Image"), t("InfiniteScrollView")),
        Popover/*u*/ = t("Popover"),
        React/*c*/ = t("React"),
        ReactGraphQL/*p*/ = t("ReactGraphQL"),
        StyleSheet/*d*/ = t("StyleSheet"),
        Text/*h*/ = t("Text"),
        TouchableBounce/*f*/ = t("TouchableBounce"),
        View/*m*/ = t("View"),
        clamp/*g*/ = t("clamp"),
        fbt/*_*/ = t("fbt"),
        keyOf/*y*/ = t("keyOf"),
        v = 40,
        S = 48,
        b = 16,
        R = keyOf/*y*/({
            popRef: null
        }),
        w = 1,
        C = React/*c*/.createClass({
            displayName: "FBAbstractEntityListPopover",
            propTypes: {
                circularProfilePictures: React/*c*/.PropTypes.bool,
                closeTextColor: React/*c*/.PropTypes.string,
                getEntityConnection: React/*c*/.PropTypes.func,
                getEntityCount: React/*c*/.PropTypes.func,
                getPopoverTitle: React/*c*/.PropTypes.func,
                hasMoreToLoad: React/*c*/.PropTypes.func,
                isLoadingMore: React/*c*/.PropTypes.func,
                loadMore: React/*c*/.PropTypes.func,
                onRowPressWithCompletion: React/*c*/.PropTypes.func
            },
            getInitialState: function() {
                return {
                    onDidCloseCallback: null
                }
            },
            getDefaultProps: function() {
                return {
                    circularProfilePictures: !1
                }
            },
            mixins: [ReactGraphQL/*p*/.Mixin],
            statics: {
                queries: {
                    actor: function(e, t) {
                        return function(e) {
                            var n = t.__GraphQL;
                            return new n.QueryFragment("FBAbstractEntityListPopover_actor", "Actor", [new n.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [t.__frag(e)], {
                                scope: "FBAbstractEntityListPopover_actor"
                            })
                        }(FBActorRow/*a*/.getQuery("actor"))
                    }
                }
            },
            open: function() {
                this.refs[R].open(), this.props.loadMore()
            },
            close: function() {
                this.refs[R].close()
            },
            loadMore: function() {
                this.props.loadMore(), this.forceUpdate()
            },
            renderList: function() {
                var e = this.props.getEntityConnection(),
                    t = this.props.getEntityCount(),
                    n = clamp/*g*/(FBActorRow/*a*/.rowHeight, t * (FBActorRow/*a*/.rowHeight + w), 400);
                if (!e || !e.edges) return React/*c*/.createElement(FBSpinner/*o*/, {
                    key: "spinner",
                    style: {
                        height: n
                    }
                });
                for (var r = [], i = e.edges, FIGColors/*s*/ = 0; FIGColors/*s*/ < i.length; ++FIGColors/*s*/) FIGColors/*s*/ > 0 && r.push(React/*c*/.createElement(View/*m*/, {
                    style: E.rowSeparator,
                    key: "FIGColors/*s*/" + FIGColors/*s*/
                })), r.push(React/*c*/.createElement(FBActorRow/*a*/, {
                    actor: i[FIGColors/*s*/].node,
                    key: "FBActorRow/*a*/" + FIGColors/*s*/,
                    circularProfilePicture: this.props.circularProfilePictures,
                    onPressWithCompletion: this.props.onRowPressWithCompletion
                }));
                var Popover/*u*/ = React/*c*/.createElement(View/*m*/, {
                    style: E.spinner
                }, React/*c*/.createElement(FBSpinner/*o*/, null));
                return React/*c*/.createElement(l, {
                    style: {
                        height: n
                    },
                    contentContainerStyle: E.contentContainer,
                    distanceToTriggerLoad: 2 * FBActorRow/*a*/.rowHeight,
                    hasMoreToLoad: this.props.hasMoreToLoad(),
                    isLoadingMore: this.props.isLoadingMore(),
                    loadMore: this.loadMore,
                    spinner: Popover/*u*/
                }, r)
            },
            renderContent: function() {
                return [React/*c*/.createElement(View/*m*/, {
                    key: "header",
                    style: E.header
                }, React/*c*/.createElement(View/*m*/, {
                    style: E.closeContainer
                }), React/*c*/.createElement(View/*m*/, {
                    style: E.titleContainer
                }, React/*c*/.createElement(Text/*h*/, {
                    numberOfLines: 2,
                    style: [E.headerText, E.titleText]
                }, this.props.getPopoverTitle())), React/*c*/.createElement(TouchableBounce/*f*/, {
                    onPress: this.close
                }, React/*c*/.createElement(View/*m*/, {
                    style: E.closeContainer
                }, React/*c*/.createElement(Text/*h*/, {
                    numberOfLines: 2,
                    style: [E.headerText, {
                        color: this.props.closeTextColor
                    }]
                }, fbt/*_*/({
                    type: "text",
                    texts: ["Close"],
                    desc: "Close button"
                }))))), React/*c*/.createElement(View/*m*/, {
                    key: "sep",
                    style: [E.rowSeparator, E.headerSeparator]
                }), this.renderList()]
            },
            render: function() {
                return React/*c*/.createElement(Popover/*u*/, {
                    ref: R,
                    contentFactory: this.renderContent
                })
            }
        }),
        E = StyleSheet/*d*/.create({
            contentContainer: {
                paddingHorizontal: b
            },
            rowSeparator: {
                height: w,
                backgroundColor: FIGColors/*s*/.separator
            },
            spinner: {
                flex: 1,
                marginVertical: 10
            },
            titleContainer: {
                flex: 1
            },
            titleText: {
                alignSelf: "stretch",
                color: FIGColors/*s*/.darkText,
                fontSize: 17,
                fontWeight: "bold"
            },
            closeContainer: {
                width: 70,
                paddingRight: b,
                alignSelf: "stretch",
                alignItems: "flex-end",
                justifyContent: "center"
            },
            headerText: {
                fontSize: 17,
                textAlign: "center"
            },
            headerSeparator: {
                marginHorizontal: b
            },
            seeMore: {
                height: v,
                justifyContent: "center",
                alignItems: "center"
            },
            header: {
                alignItems: "center",
                flexDirection: "row",
                height: S
            }
        });
    i.exports = C
});