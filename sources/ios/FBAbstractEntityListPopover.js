__d("FBAbstractEntityListPopover",["FBSpinner","FBActorRow","FIGColors","Image","InfiniteScrollView","Popover","React","ReactGraphQL","StyleSheet","Text","TouchableBounce","View","clamp","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var FBSpinner/*o*/ = require/*t*/("FBSpinner"),
        FBActorRow/*a*/ = require/*t*/("FBActorRow"),
        FIGColors/*s*/ = require/*t*/("FIGColors"),
        l = (require/*t*/("Image"), require/*t*/("InfiniteScrollView")),
        Popover/*u*/ = require/*t*/("Popover"),
        React/*c*/ = require/*t*/("React"),
        ReactGraphQL/*p*/ = require/*t*/("ReactGraphQL"),
        StyleSheet/*d*/ = require/*t*/("StyleSheet"),
        Text/*h*/ = require/*t*/("Text"),
        TouchableBounce/*f*/ = require/*t*/("TouchableBounce"),
        View/*m*/ = require/*t*/("View"),
        clamp/*g*/ = require/*t*/("clamp"),
        fbt/*_*/ = require/*t*/("fbt"),
        keyOf/*y*/ = require/*t*/("keyOf"),
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
                    actor: function(global/*e*/, require/*t*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*t*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("FBAbstractEntityListPopover_actor", "Actor", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*t*/.__frag(global/*e*/)], {
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
                var global/*e*/ = this.props.getEntityConnection(),
                    require/*t*/ = this.props.getEntityCount(),
                    requireDynamic/*n*/ = clamp/*g*/(FBActorRow/*a*/.rowHeight, require/*t*/ * (FBActorRow/*a*/.rowHeight + w), 400);
                if (!global/*e*/ || !global/*e*/.edges) return React/*c*/.createElement(FBSpinner/*o*/, {
                    key: "spinner",
                    style: {
                        height: requireDynamic/*n*/
                    }
                });
                for (var requireLazy/*r*/ = [], module/*i*/ = global/*e*/.edges, FIGColors/*s*/ = 0; FIGColors/*s*/ < module/*i*/.length; ++FIGColors/*s*/) FIGColors/*s*/ > 0 && requireLazy/*r*/.push(React/*c*/.createElement(View/*m*/, {
                    style: E.rowSeparator,
                    key: "FIGColors/*s*/" + FIGColors/*s*/
                })), requireLazy/*r*/.push(React/*c*/.createElement(FBActorRow/*a*/, {
                    actor: module/*i*/[FIGColors/*s*/].node,
                    key: "FBActorRow/*a*/" + FIGColors/*s*/,
                    circularProfilePicture: this.props.circularProfilePictures,
                    onPressWithCompletion: this.props.onRowPressWithCompletion
                }));
                var Popover/*u*/ = React/*c*/.createElement(View/*m*/, {
                    style: E.spinner
                }, React/*c*/.createElement(FBSpinner/*o*/, null));
                return React/*c*/.createElement(l, {
                    style: {
                        height: requireDynamic/*n*/
                    },
                    contentContainerStyle: E.contentContainer,
                    distanceToTriggerLoad: 2 * FBActorRow/*a*/.rowHeight,
                    hasMoreToLoad: this.props.hasMoreToLoad(),
                    isLoadingMore: this.props.isLoadingMore(),
                    loadMore: this.loadMore,
                    spinner: Popover/*u*/
                }, requireLazy/*r*/)
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
    module/*i*/.exports = C
});