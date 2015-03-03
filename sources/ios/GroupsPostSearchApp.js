__d("GroupsPostSearchApp",["DliteLoadingComponent","GroupPostsSearchRoute","React","StyleSheet","TextInput","THColors","THGroupPostSearchView","THGroupView","View","fbt","keyOf","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        a = require/*t*/("GroupPostsSearchRoute"),
        s = require/*t*/("React"),
        l = require/*t*/("StyleSheet"),
        u = require/*t*/("TextInput"),
        c = require/*t*/("THColors"),
        p = require/*t*/("THGroupPostSearchView"),
        d = require/*t*/("THGroupView"),
        h = require/*t*/("View"),
        f = require/*t*/("fbt"),
        m = require/*t*/("keyOf");
    require/*t*/("THRoutingConfig").initialize();
    var g = m({
            textInputRef: null
        }),
        _ = s.createClass({
            displayName: "GroupsPostSearchApp",
            getInitialState: function() {
                return {
                    searchQuery: "",
                    submittedQuery: ""
                }
            },
            onTextInputChanged: function(global/*e*/) {
                this.setState({
                    searchQuery: global/*e*/
                })
            },
            onSearchSubmit: function() {
                this.state.searchQuery !== this.state.submittedQuery && this.setState({
                    submittedQuery: this.state.searchQuery
                })
            },
            getSearchResults: function() {
                if (this.state.submittedQuery.trim().length > 0) {
                    var global/*e*/ = new a(null, {
                        postsQuery: this.getQueryString()
                    });
                    return s.createElement(o, {
                        component: p,
                        route: global/*e*/,
                        loadingView: d.getFakeStoryView(),
                        refetchRoute: !0,
                        passProps: this.props
                    })
                }
                return null
            },
            getQueryString: function() {
                return "intersect(stories-in(" + this.props.group + "),union(stories-keyword(" + this.state.submittedQuery + "),stories-by(users-named(" + this.state.submittedQuery + "))))"
            },
            render: function() {
                var global/*e*/ = f({
                    type: "text",
                    texts: ["Search posts in this group..."],
                    desc: "Placeholder for group post search input"
                });
                return s.createElement(h, null, s.createElement(h, {
                    style: y.parentView
                }, s.createElement(u, {
                    ref: g,
                    placeholder: global/*e*/,
                    style: y.textInput,
                    onSubmitEditing: this.onSearchSubmit,
                    onChangeText: this.onTextInputChanged
                })), this.getSearchResults())
            }
        }),
        y = l.create({
            parentView: {
                paddingTop: 60,
                backgroundColor: c.lightBlue
            },
            textInput: {
                backgroundColor: c.backgroundWash,
                height: 50,
                paddingHorizontal: 10
            }
        });
    module/*i*/.exports = _
});