__d("FBAbstractEntityListPopover",["FBSpinner","FBActorRow","FIGColors","Image","InfiniteScrollView","Popover","React","ReactGraphQL","StyleSheet","Text","TouchableBounce","View","clamp","fbt","keyOf"],function (global/*e*/, require/*FIGColors/*t*/*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*FIGColors/*t*/*/("FBSpinner"),
        exports/*a*/ = require/*FIGColors/*t*/*/("FBActorRow"),
        FBSpinner/*s*/ = require/*FIGColors/*t*/*/("FIGColors"),
        FBActorRow/*l*/ = (require/*FIGColors/*t*/*/("Image"), require/*FIGColors/*t*/*/("InfiniteScrollView")),
        Image/*u*/ = require/*FIGColors/*t*/*/("Popover"),
        InfiniteScrollView/*c*/ = require/*FIGColors/*t*/*/("React"),
        Popover/*p*/ = require/*FIGColors/*t*/*/("ReactGraphQL"),
        React/*d*/ = require/*FIGColors/*t*/*/("StyleSheet"),
        ReactGraphQL/*h*/ = require/*FIGColors/*t*/*/("Text"),
        StyleSheet/*f*/ = require/*FIGColors/*t*/*/("TouchableBounce"),
        Text/*m*/ = require/*FIGColors/*t*/*/("View"),
        TouchableBounce/*g*/ = require/*FIGColors/*t*/*/("clamp"),
        View/*_*/ = require/*FIGColors/*t*/*/("fbt"),
        clamp/*y*/ = require/*FIGColors/*t*/*/("keyOf"),
        fbt/*v*/ = 40,
        keyOf/*S*/ = 48,
        b = 16,
        R = clamp/*y*/({
            popRef: null
        }),
        w = 1,
        C = InfiniteScrollView/*c*/.createClass({
            displayName: "FBAbstractEntityListPopover",
            propTypes: {
                circularProfilePictures: InfiniteScrollView/*c*/.PropTypes.bool,
                closeTextColor: InfiniteScrollView/*c*/.PropTypes.string,
                getEntityConnection: InfiniteScrollView/*c*/.PropTypes.func,
                getEntityCount: InfiniteScrollView/*c*/.PropTypes.func,
                getPopoverTitle: InfiniteScrollView/*c*/.PropTypes.func,
                hasMoreToLoad: InfiniteScrollView/*c*/.PropTypes.func,
                isLoadingMore: InfiniteScrollView/*c*/.PropTypes.func,
                loadMore: InfiniteScrollView/*c*/.PropTypes.func,
                onRowPressWithCompletion: InfiniteScrollView/*c*/.PropTypes.func
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
            mixins: [Popover/*p*/.Mixin],
            statics: {
                queries: {
                    actor: function(global/*e*/, require/*FIGColors/*t*/*/) {
                        return function(global/*e*/) {
                            var requireDynamic/*n*/ = require/*FIGColors/*t*/*/.__GraphQL;
                            return new requireDynamic/*n*/.QueryFragment("FBAbstractEntityListPopover_actor", "Actor", [new requireDynamic/*n*/.Field("id", null, null, null, null, null, {
                                generated: !0,
                                requisite: !0
                            })], [require/*FIGColors/*t*/*/.__frag(global/*e*/)], {
                                scope: "FBAbstractEntityListPopover_actor"
                            })
                        }(exports/*a*/.getQuery("actor"))
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
                    require/*FIGColors/*t*/*/ = this.props.getEntityCount(),
                    requireDynamic/*n*/ = TouchableBounce/*g*/(exports/*a*/.rowHeight, require/*FIGColors/*t*/*/ * (exports/*a*/.rowHeight + w), 400);
                if (!global/*e*/ || !global/*e*/.edges) return InfiniteScrollView/*c*/.createElement(o, {
                    key: "spinner",
                    style: {
                        height: requireDynamic/*n*/
                    }
                });
                for (var requireLazy/*r*/ = [], module/*i*/ = global/*e*/.edges, FBSpinner/*s*/ = 0; FBSpinner/*s*/ < module/*i*/.length; ++FBSpinner/*s*/) FBSpinner/*s*/ > 0 && requireLazy/*r*/.push(InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    style: E.rowSeparator,
                    key: "FBSpinner/*s*/" + FBSpinner/*s*/
                })), requireLazy/*r*/.push(InfiniteScrollView/*c*/.createElement(exports/*a*/, {
                    actor: module/*i*/[FBSpinner/*s*/].node,
                    key: "exports/*a*/" + FBSpinner/*s*/,
                    circularProfilePicture: this.props.circularProfilePictures,
                    onPressWithCompletion: this.props.onRowPressWithCompletion
                }));
                var Image/*u*/ = InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    style: E.spinner
                }, InfiniteScrollView/*c*/.createElement(o, null));
                return InfiniteScrollView/*c*/.createElement(FBActorRow/*l*/, {
                    style: {
                        height: requireDynamic/*n*/
                    },
                    contentContainerStyle: E.contentContainer,
                    distanceToTriggerLoad: 2 * exports/*a*/.rowHeight,
                    hasMoreToLoad: this.props.hasMoreToLoad(),
                    isLoadingMore: this.props.isLoadingMore(),
                    loadMore: this.loadMore,
                    spinner: Image/*u*/
                }, requireLazy/*r*/)
            },
            renderContent: function() {
                return [InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    key: "header",
                    style: E.header
                }, InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    style: E.closeContainer
                }), InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    style: E.titleContainer
                }, InfiniteScrollView/*c*/.createElement(ReactGraphQL/*h*/, {
                    numberOfLines: 2,
                    style: [E.headerText, E.titleText]
                }, this.props.getPopoverTitle())), InfiniteScrollView/*c*/.createElement(StyleSheet/*f*/, {
                    onPress: this.close
                }, InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    style: E.closeContainer
                }, InfiniteScrollView/*c*/.createElement(ReactGraphQL/*h*/, {
                    numberOfLines: 2,
                    style: [E.headerText, {
                        color: this.props.closeTextColor
                    }]
                }, View/*_*/({
                    type: "text",
                    texts: ["Close"],
                    desc: "Close button"
                }))))), InfiniteScrollView/*c*/.createElement(Text/*m*/, {
                    key: "sep",
                    style: [E.rowSeparator, E.headerSeparator]
                }), this.renderList()]
            },
            render: function() {
                return InfiniteScrollView/*c*/.createElement(Image/*u*/, {
                    ref: R,
                    contentFactory: this.renderContent
                })
            }
        }),
        E = React/*d*/.create({
            contentContainer: {
                paddingHorizontal: b
            },
            rowSeparator: {
                height: w,
                backgroundColor: FBSpinner/*s*/.separator
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
                color: FBSpinner/*s*/.darkText,
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
                height: fbt/*v*/,
                justifyContent: "center",
                alignItems: "center"
            },
            header: {
                alignItems: "center",
                flexDirection: "row",
                height: keyOf/*S*/
            }
        });
    module/*i*/.exports = C
});