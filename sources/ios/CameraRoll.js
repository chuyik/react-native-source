__d("CameraRoll",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","deepFreezeAndThrowOnMutationInDev","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var ReactPropTypes/*a*/ = require/*t*/("ReactPropTypes"),
        NativeModules/*s*/ = require/*t*/("NativeModules").RKCameraRollManager,
        createStrictShapeTypeChecker/*l*/ = require/*t*/("createStrictShapeTypeChecker"),
        deepFreezeAndThrowOnMutationInDev/*u*/ = require/*t*/("deepFreezeAndThrowOnMutationInDev"),
        invariant/*c*/ = require/*t*/("invariant"),
        p = ["Album", "All", "Event", "Faces", "Library", "PhotoStream", "SavedPhotos"];
    deepFreezeAndThrowOnMutationInDev/*u*/(p);
    var d = createStrictShapeTypeChecker/*l*/({
            first: ReactPropTypes/*a*/.number.isRequired,
            after: ReactPropTypes/*a*/.string,
            groupTypes: ReactPropTypes/*a*/.oneOf(p),
            groupName: ReactPropTypes/*a*/.string
        }),
        h = createStrictShapeTypeChecker/*l*/({
            edges: ReactPropTypes/*a*/.arrayOf(createStrictShapeTypeChecker/*l*/({
                node: createStrictShapeTypeChecker/*l*/({
                    type: ReactPropTypes/*a*/.string.isRequired,
                    group_name: ReactPropTypes/*a*/.string.isRequired,
                    image: createStrictShapeTypeChecker/*l*/({
                        uri: ReactPropTypes/*a*/.string.isRequired,
                        height: ReactPropTypes/*a*/.number.isRequired,
                        width: ReactPropTypes/*a*/.number.isRequired,
                        isStored: ReactPropTypes/*a*/.bool
                    }).isRequired,
                    timestamp: ReactPropTypes/*a*/.number.isRequired,
                    location: createStrictShapeTypeChecker/*l*/({
                        latitude: ReactPropTypes/*a*/.number,
                        longitude: ReactPropTypes/*a*/.number,
                        altitude: ReactPropTypes/*a*/.number,
                        heading: ReactPropTypes/*a*/.number,
                        speed: ReactPropTypes/*a*/.number
                    })
                }).isRequired
            })).isRequired,
            page_info: createStrictShapeTypeChecker/*l*/({
                has_next_page: ReactPropTypes/*a*/.bool.isRequired,
                start_cursor: ReactPropTypes/*a*/.string,
                end_cursor: ReactPropTypes/*a*/.string
            }).isRequired
        });
    o.saveImageWithTag = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "string" != typeof global/*e*/ && invariant/*c*/(0, "CameraRoll.saveImageWithTag tag must be ReactPropTypes/*a*/ valid string."), NativeModules/*s*/.saveImageWithTag(global/*e*/, function(global/*e*/) {
            require/*t*/ && require/*t*/(global/*e*/)
        }, function(global/*e*/) {
            requireDynamic/*n*/ && requireDynamic/*n*/(global/*e*/)
        })
    }, o.getPhotos = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = require/*t*/;
        __DEV__ && (d({
            params: global/*e*/
        }, "params", "CameraRoll.getPhotos"), "function" != typeof require/*t*/ && invariant/*c*/(0, "CameraRoll.getPhotos callback must be ReactPropTypes/*a*/ valid function."), "function" != typeof requireDynamic/*n*/ && invariant/*c*/(0, "CameraRoll.getPhotos errorCallback must be ReactPropTypes/*a*/ valid function.")), __DEV__ && (requireLazy/*r*/ = function(global/*e*/) {
            h({
                response: global/*e*/
            }, "response", "CameraRoll.getPhotos callback"), require/*t*/(global/*e*/)
        }), NativeModules/*s*/.getPhotos(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/)
    }, o.GroupTypesOptions = p, module/*i*/.exports = o
});