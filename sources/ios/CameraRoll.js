__d("CameraRoll",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","deepFreezeAndThrowOnMutationInDev","invariant"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";

    function o() {}
    var a = require/*t*/("ReactPropTypes"),
        s = require/*t*/("NativeModules").RKCameraRollManager,
        l = require/*t*/("createStrictShapeTypeChecker"),
        u = require/*t*/("deepFreezeAndThrowOnMutationInDev"),
        c = require/*t*/("invariant"),
        p = ["Album", "All", "Event", "Faces", "Library", "PhotoStream", "SavedPhotos"];
    u(p);
    var d = l({
            first: a.number.isRequired,
            after: a.string,
            groupTypes: a.oneOf(p),
            groupName: a.string
        }),
        h = l({
            edges: a.arrayOf(l({
                node: l({
                    type: a.string.isRequired,
                    group_name: a.string.isRequired,
                    image: l({
                        uri: a.string.isRequired,
                        height: a.number.isRequired,
                        width: a.number.isRequired,
                        isStored: a.bool
                    }).isRequired,
                    timestamp: a.number.isRequired,
                    location: l({
                        latitude: a.number,
                        longitude: a.number,
                        altitude: a.number,
                        heading: a.number,
                        speed: a.number
                    })
                }).isRequired
            })).isRequired,
            page_info: l({
                has_next_page: a.bool.isRequired,
                start_cursor: a.string,
                end_cursor: a.string
            }).isRequired
        });
    o.saveImageWithTag = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        "string" != typeof global/*e*/ && c(0, "CameraRoll.saveImageWithTag tag must be a valid string."), s.saveImageWithTag(global/*e*/, function(global/*e*/) {
            require/*t*/ && require/*t*/(global/*e*/)
        }, function(global/*e*/) {
            requireDynamic/*n*/ && requireDynamic/*n*/(global/*e*/)
        })
    }, o.getPhotos = function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
        var requireLazy/*r*/ = require/*t*/;
        __DEV__ && (d({
            params: global/*e*/
        }, "params", "CameraRoll.getPhotos"), "function" != typeof require/*t*/ && c(0, "CameraRoll.getPhotos callback must be a valid function."), "function" != typeof requireDynamic/*n*/ && c(0, "CameraRoll.getPhotos errorCallback must be a valid function.")), __DEV__ && (requireLazy/*r*/ = function(global/*e*/) {
            h({
                response: global/*e*/
            }, "response", "CameraRoll.getPhotos callback"), require/*t*/(global/*e*/)
        }), s.getPhotos(global/*e*/, requireLazy/*r*/, requireDynamic/*n*/)
    }, o.GroupTypesOptions = p, module/*i*/.exports = o
});