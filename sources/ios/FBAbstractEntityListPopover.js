__d("FBAbstractEntityListPopover",["FBSpinner","FBActorRow","FIGColors","Image","InfiniteScrollView","Popover","React","ReactGraphQL","StyleSheet","Text","TouchableBounce","View","clamp","fbt","keyOf"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("FBSpinner"),
        a = require/*t*/("FBActorRow"),
        s = require/*t*/("FIGColors"),
        l = (require/*t*/("Image"), require/*t*/("InfiniteScrollView")),
        u = require/*t*/("Popover"),
        c = require/*t*/("React"),
        p = require/*t*/("ReactGraphQL"),
        d = require/*t*/("StyleSheet"),
        h = require/*t*/("Text"),
        f = require/*t*/("TouchableBounce"),
        m = require/*t*/("View"),
        g = require/*t*/("clamp"),
        _ = require/*t*/("fbt"),
        y = require/*t*/("keyOf"),
        v = 40,
        S = 48,
        b = 16,
        R = y({
            popRef: null
        }),
        w = 1,
        C = c.createClass({
            displayName: "FBAbstractEntityListPopover",
            propTypes: {
                circularProfilePictures: c.PropTypes.bool,
                closeTextColor: c.PropTypes.string,
                getEntityConnection: c.PropTypes.func,
                getEntityCount: c.PropTypes.func,
                getPopoverTitle: c.PropTypes.func,
                hasMoreToLoad: c.PropTypes.func,
                isLoadingMore: c.PropTypes.func,
                loadMore: c.PropTypes.func,
                onRowPressWithCompletion: c.PropTypes.func
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
            mixins: [p.Mixin],
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
                        }(a.getQuery("actor"))
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
                    requireDynamic/*n*/ = g(a.rowHeight, require/*t*/ * (a.rowHeight + w), 400);
                if (!global/*e*/ || !global/*e*/.edges) return c.createElement(o, {
                    key: "spinner",
                    style: {
                        height: requireDynamic/*n*/
                    }
                });
                for (var requireLazy/*r*/ = [], module/*i*/ = global/*e*/.edges, s = 0; s < module/*i*/.length; ++s) s > 0 && requireLazy/*r*/.push(c.createElement(m, {
                    style: E.rowSeparator,
                    key: "s" + s
                })), requireLazy/*r*/.push(c.createElement(a, {
                    actor: module/*i*/[s].node,
                    key: "a" + s,
                    circularProfilePicture: this.props.circularProfilePictures,
                    onPressWithCompletion: this.props.onRowPressWithCompletion
                }));
                var u = c.createElement(m, {
                    style: E.spinner
                }, c.createElement(o, null));
                return c.createElement(l, {
                    style: {
                        height: requireDynamic/*n*/
                    },
                    contentContainerStyle: E.contentContainer,
                    distanceToTriggerLoad: 2 * a.rowHeight,
                    hasMoreToLoad: this.props.hasMoreToLoad(),
                    isLoadingMore: this.props.isLoadingMore(),
                    loadMore: this.loadMore,
                    spinner: u
                }, requireLazy/*r*/)
            },
            renderContent: function() {
                return [c.createElement(m, {
                    key: "header",
                    style: E.header
                }, c.createElement(m, {
                    style: E.closeContainer
                }), c.createElement(m, {
                    style: E.titleContainer
                }, c.createElement(h, {
                    numberOfLines: 2,
                    style: [E.headerText, E.titleText]
                }, this.props.getPopoverTitle())), c.createElement(f, {
                    onPress: this.close
                }, c.createElement(m, {
                    style: E.closeContainer
                }, c.createElement(h, {
                    numberOfLines: 2,
                    style: [E.headerText, {
                        color: this.props.closeTextColor
                    }]
                }, _({
                    type: "text",
                    texts: ["Close"],
                    desc: "Close button"
                }))))), c.createElement(m, {
                    key: "sep",
                    style: [E.rowSeparator, E.headerSeparator]
                }), this.renderList()]
            },
            render: function() {
                return c.createElement(u, {
                    ref: R,
                    contentFactory: this.renderContent
                })
            }
        }),
        E = d.create({
            contentContainer: {
                paddingHorizontal: b
            },
            rowSeparator: {
                height: w,
                backgroundColor: s.separator
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
                color: s.darkText,
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