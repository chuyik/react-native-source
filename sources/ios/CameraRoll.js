__d("CameraRoll",["ReactPropTypes","NativeModules","createStrictShapeTypeChecker","deepFreezeAndThrowOnMutationInDev","invariant"],function (e, t, n, r, i) {
    "use strict";

    function o() {}
    var ReactPropTypes/*a*/ = t("ReactPropTypes"),
        NativeModules/*s*/ = t("NativeModules").RKCameraRollManager,
        createStrictShapeTypeChecker/*l*/ = t("createStrictShapeTypeChecker"),
        deepFreezeAndThrowOnMutationInDev/*u*/ = t("deepFreezeAndThrowOnMutationInDev"),
        invariant/*c*/ = t("invariant"),
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
    o.saveImageWithTag = function(e, t, n) {
        "string" != typeof e && invariant/*c*/(0, "CameraRoll.saveImageWithTag tag must be ReactPropTypes/*a*/ valid string."), NativeModules/*s*/.saveImageWithTag(e, function(e) {
            t && t(e)
        }, function(e) {
            n && n(e)
        })
    }, o.getPhotos = function(e, t, n) {
        var r = t;
        __DEV__ && (d({
            params: e
        }, "params", "CameraRoll.getPhotos"), "function" != typeof t && invariant/*c*/(0, "CameraRoll.getPhotos callback must be ReactPropTypes/*a*/ valid function."), "function" != typeof n && invariant/*c*/(0, "CameraRoll.getPhotos errorCallback must be ReactPropTypes/*a*/ valid function.")), __DEV__ && (r = function(e) {
            h({
                response: e
            }, "response", "CameraRoll.getPhotos callback"), t(e)
        }), NativeModules/*s*/.getPhotos(e, r, n)
    }, o.GroupTypesOptions = p, i.exports = o
});