__d("GroupsPostSearchApp",["DliteLoadingComponent","GroupPostsSearchRoute","React","StyleSheet","TextInput","THColors","THGroupPostSearchView","THGroupView","View","fbt","keyOf","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var DliteLoadingComponent/*o*/ = require/*t*/("DliteLoadingComponent"),
        GroupPostsSearchRoute/*a*/ = require/*t*/("GroupPostsSearchRoute"),
        React/*s*/ = require/*t*/("React"),
        StyleSheet/*l*/ = require/*t*/("StyleSheet"),
        TextInput/*u*/ = require/*t*/("TextInput"),
        THColors/*c*/ = require/*t*/("THColors"),
        THGroupPostSearchView/*p*/ = require/*t*/("THGroupPostSearchView"),
        THGroupView/*d*/ = require/*t*/("THGroupView"),
        View/*h*/ = require/*t*/("View"),
        fbt/*f*/ = require/*t*/("fbt"),
        keyOf/*m*/ = require/*t*/("keyOf");
    require/*t*/("THRoutingConfig").initialize();
    var g = keyOf/*m*/({
            textInputRef: null
        }),
        _ = React/*s*/.createClass({
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
                    var global/*e*/ = new GroupPostsSearchRoute/*a*/(null, {
                        postsQuery: this.getQueryString()
                    });
                    return React/*s*/.createElement(DliteLoadingComponent/*o*/, {
                        component: THGroupPostSearchView/*p*/,
                        route: global/*e*/,
                        loadingView: THGroupView/*d*/.getFakeStoryView(),
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
                var global/*e*/ = fbt/*f*/({
                    type: "text",
                    texts: ["Search posts in this group..."],
                    desc: "Placeholder for group post search input"
                });
                return React/*s*/.createElement(View/*h*/, null, React/*s*/.createElement(View/*h*/, {
                    style: y.parentView
                }, React/*s*/.createElement(TextInput/*u*/, {
                    ref: g,
                    placeholder: global/*e*/,
                    style: y.textInput,
                    onSubmitEditing: this.onSearchSubmit,
                    onChangeText: this.onTextInputChanged
                })), this.getSearchResults())
            }
        }),
        y = StyleSheet/*l*/.create({
            parentView: {
                paddingTop: 60,
                backgroundColor: THColors/*c*/.lightBlue
            },
            textInput: {
                backgroundColor: THColors/*c*/.backgroundWash,
                height: 50,
                paddingHorizontal: 10
            }
        });
    module/*i*/.exports = _
});