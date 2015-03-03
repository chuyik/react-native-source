__d("CameraRoll",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","deepFreezeAndThrowOnMutationInDev","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = require/*t*/("ReactPropTypes"),
        exports/*s*/ = require/*t*/("NativeModules").RKCameraRollManager,
        ReactPropTypes/*l*/ = require/*t*/("createStrictShapeTypeChecker"),
        NativeModules/*u*/ = require/*t*/("deepFreezeAndThrowOnMutationInDev"),
        createStrictShapeTypeChecker/*c*/ = require/*t*/("invariant"),
        deepFreezeAndThrowOnMutationInDev/*p*/ = ["Album", "All", "Event", "Faces", "Library", "PhotoStream", "SavedPhotos"];
    NativeModules/*u*/(deepFreezeAndThrowOnMutationInDev/*p*/);
    var d = ReactPropTypes/*l*/({
            first: a.number.isRequired,
            invariant/*after*/: a.string,
            groupTypes: a.oneOf(deepFreezeAndThrowOnMutationInDev/*p*/),
            groupName: a.string
        }),
        h = ReactPropTypes/*l*/({
            edges: a.arrayOf(ReactPropTypes/*l*/({
                node: ReactPropTypes/*l*/({
                    type: a.string.isRequired,
                    group_name: a.string.isRequired,
                    image: ReactPropTypes/*l*/({
                        uri: a.string.isRequired,
                        height: a.number.isRequired,
                        width: a.number.isRequired,
                        isStored: a.bool
                    }).isRequired,
                    timestamp: a.number.isRequired,
                    location: ReactPropTypes/*l*/({
                        latitude: a.number,
                        longitude: a.number,
                        altitude: a.number,
                        heading: a.number,
                        speed: a.number
                    })
                }).isRequired
            })).isRequired,
            page_info: ReactPropTypes/*l*/({
                has_next_page: a.bool.isRequired,
                start_cursor: a.string,
                end_cursor: a.string
            }).isRequired
        });
    o.saveImageWithTag = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "string" != typeof global/*e*/ && createStrictShapeTypeChecker/*c*/(0, "CameraRoll.saveImageWithTag tag must be a valid string."), exports/*s*/.saveImageWithTag(global/*e*/, function(global/*e*/) {
            require/*t*/ && require/*t*/(global/*e*/)
        }, function(global/*e*/) {
            requireDynamic/*n*/ && requireDynamic/*n*/(global/*e*/)
        })
    }, o.getPhotos = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = require/*t*/;
        __DEV__ && (d({
            params: global/*e*/
        }, "params", "CameraRoll.getPhotos"), "function" != typeof require/*t*/ && createStrictShapeTypeChecker/*c*/(0, "CameraRoll.getPhotos callback must be a valid function."), "function" != typeof requireDynamic/*n*/ && createStrictShapeTypeChecker/*c*/(0, "CameraRoll.getPhotos errorCallback must be a valid function.")), __DEV__ && (requireLazy/*r*/ = function(global/*e*/) {
            h({
                response: global/*e*/
            }, "response", "CameraRoll.getPhotos callback"), require/*t*/(global/*e*/)
        }), exports/*s*/.getPhotos(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/)
    }, o.GroupTypesOptions = deepFreezeAndThrowOnMutationInDev/*p*/, module/*i*/.exports = o
});