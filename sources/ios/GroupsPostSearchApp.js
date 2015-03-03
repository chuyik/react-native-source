__d("GroupsPostSearchApp",["DliteLoadingComponent","GroupPostsSearchRoute","React","StyleSheet","TextInput","THColors","THGroupPostSearchView","THGroupView","View","fbt","keyOf","THRoutingConfig"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var o = require/*t*/("DliteLoadingComponent"),
        exports/*a*/ = require/*t*/("GroupPostsSearchRoute"),
        DliteLoadingComponent/*s*/ = require/*t*/("React"),
        GroupPostsSearchRoute/*l*/ = require/*t*/("StyleSheet"),
        React/*u*/ = require/*t*/("TextInput"),
        StyleSheet/*c*/ = require/*t*/("THColors"),
        TextInput/*p*/ = require/*t*/("THGroupPostSearchView"),
        THColors/*d*/ = require/*t*/("THGroupView"),
        THGroupPostSearchView/*h*/ = require/*t*/("View"),
        THGroupView/*f*/ = require/*t*/("fbt"),
        View/*m*/ = require/*t*/("keyOf");
    require/*t*/("THRoutingConfig").initialize();
    var g = View/*m*/({
            textInputRef: null
        }),
        fbt/*_*/ = DliteLoadingComponent/*s*/.createClass({
            displayName: "GroupsPostSearchApp",
            keyOf/*getInitialState*/: function() {
                return {
                    searchQuery: "",
                    THRoutingConfig/*submittedQuery*/: ""
                }
            },
            onTextInputChanged: function(global/*e*/) {
                this.setState({
                    searchQuery: global/*e*/
                })
            },
            onSearchSubmit: function() {
                this.state.searchQuery !== this.state.THRoutingConfig/*submittedQuery*/ && this.setState({
                    THRoutingConfig/*submittedQuery*/: this.state.searchQuery
                })
            },
            getSearchResults: function() {
                if (this.state.THRoutingConfig/*submittedQuery*/.trim().length > 0) {
                    var global/*e*/ = new exports/*a*/(null, {
                        postsQuery: this.getQueryString()
                    });
                    return DliteLoadingComponent/*s*/.createElement(o, {
                        component: TextInput/*p*/,
                        route: global/*e*/,
                        loadingView: THColors/*d*/.getFakeStoryView(),
                        refetchRoute: !0,
                        passProps: this.props
                    })
                }
                return null
            },
            getQueryString: function() {
                return "intersect(stories-in(" + this.props.group + "),union(stories-keyword(" + this.state.THRoutingConfig/*submittedQuery*/ + "),stories-by(users-named(" + this.state.THRoutingConfig/*submittedQuery*/ + "))))"
            },
            render: function() {
                var global/*e*/ = THGroupView/*f*/({
                    type: "text",
                    texts: ["Search posts in this group..."],
                    desc: "Placeholder for group post search input"
                });
                return DliteLoadingComponent/*s*/.createElement(THGroupPostSearchView/*h*/, null, DliteLoadingComponent/*s*/.createElement(THGroupPostSearchView/*h*/, {
                    style: y.parentView
                }, DliteLoadingComponent/*s*/.createElement(React/*u*/, {
                    ref: g,
                    placeholder: global/*e*/,
                    style: y.textInput,
                    onSubmitEditing: this.onSearchSubmit,
                    onChangeText: this.onTextInputChanged
                })), this.getSearchResults())
            }
        }),
        y = GroupPostsSearchRoute/*l*/.create({
            parentView: {
                paddingTop: 60,
                backgroundColor: StyleSheet/*c*/.lightBlue
            },
            textInput: {
                backgroundColor: StyleSheet/*c*/.backgroundWash,
                height: 50,
                paddingHorizontal: 10
            }
        });
    module/*i*/.exports = fbt/*_*/
});