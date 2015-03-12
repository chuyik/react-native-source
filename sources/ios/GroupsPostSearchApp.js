__d("GroupsPostSearchApp",["DliteLoadingComponent","GroupPostsSearchRoute","React","StyleSheet","TextInput","THColors","THGroupPostSearchView","THGroupView","View","fbt","keyOf","THRoutingConfig"],function (e, t, n, r, i) {
    "use strict";
    var DliteLoadingComponent/*o*/ = t("DliteLoadingComponent"),
        GroupPostsSearchRoute/*a*/ = t("GroupPostsSearchRoute"),
        React/*s*/ = t("React"),
        StyleSheet/*l*/ = t("StyleSheet"),
        TextInput/*u*/ = t("TextInput"),
        THColors/*c*/ = t("THColors"),
        THGroupPostSearchView/*p*/ = t("THGroupPostSearchView"),
        THGroupView/*d*/ = t("THGroupView"),
        View/*h*/ = t("View"),
        fbt/*f*/ = t("fbt"),
        keyOf/*m*/ = t("keyOf");
    t("THRoutingConfig").initialize();
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
            onTextInputChanged: function(e) {
                this.setState({
                    searchQuery: e
                })
            },
            onSearchSubmit: function() {
                this.state.searchQuery !== this.state.submittedQuery && this.setState({
                    submittedQuery: this.state.searchQuery
                })
            },
            getSearchResults: function() {
                if (this.state.submittedQuery.trim().length > 0) {
                    var e = new GroupPostsSearchRoute/*a*/(null, {
                        postsQuery: this.getQueryString()
                    });
                    return React/*s*/.createElement(DliteLoadingComponent/*o*/, {
                        component: THGroupPostSearchView/*p*/,
                        route: e,
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
                var e = fbt/*f*/({
                    type: "text",
                    texts: ["Search posts in this group..."],
                    desc: "Placeholder for group post search input"
                });
                return React/*s*/.createElement(View/*h*/, null, React/*s*/.createElement(View/*h*/, {
                    style: y.parentView
                }, React/*s*/.createElement(TextInput/*u*/, {
                    ref: g,
                    placeholder: e,
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
    i.exports = _
});