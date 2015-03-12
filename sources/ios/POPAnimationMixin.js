__d("POPAnimationMixin",["NativeModulesDeprecated","POPAnimation","invariant","warning"],function (e, t, n, r, i) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = t("NativeModulesDeprecated"),
        POPAnimation/*a*/ = t("POPAnimation"),
        invariant/*s*/ = t("invariant"),
        warning/*l*/ = t("warning"),
        u = NativeModulesDeprecated/*o*/.RKPOPAnimationManager,
        c = {
            AnimationTypes: POPAnimation/*a*/.Types,
            AnimationProperties: POPAnimation/*a*/.Properties,
            getInitialState: function() {
                return {
                    _currentAnimationsByNodeHandle: {}
                }
            },
            _ensureBookkeepingSetup: function(e) {
                this.state._currentAnimationsByNodeHandle[e] || (this.state._currentAnimationsByNodeHandle[e] = [])
            },
            startAnimation: function(e, t, n) {
                var r = 0;
                "number" == typeof t ? r = t : (t instanceof Object && void 0 !== t.type && void 0 !== t.property || invariant/*s*/(0, "Animation definitions must specify POPAnimation/*a*/ type of animation and POPAnimation/*a*/ property to animate."), r = POPAnimation/*a*/.createAnimation(t.type, t)), this.refs[e] || invariant/*s*/(0, "Invalid refKey " + e + " for anim:\n" + JSON.stringify(t) + "\nvalid refs: " + JSON.stringify(Object.keys(this.refs)));
                var i = this.refs[e].getNodeHandle();
                this.startAnimationWithNodeHandle(i, r, n)
            },
            startAnimationWithNodeHandle: function(e, t, n) {
                this._ensureBookkeepingSetup(e);
                var r = this.state._currentAnimationsByNodeHandle[e],
                    i = r.length;
                r.push(t);
                var NativeModulesDeprecated/*o*/ = function(t) {
                    if (this.isMounted()) {
                        r[i] = 0;
                        for (var NativeModulesDeprecated/*o*/ = !0, POPAnimation/*a*/ = 0; POPAnimation/*a*/ < r.length; POPAnimation/*a*/++)
                            if (r[POPAnimation/*a*/]) {
                                NativeModulesDeprecated/*o*/ = !1;
                                break
                            }
                        NativeModulesDeprecated/*o*/ && (this.state._currentAnimationsByNodeHandle[e] = void 0), n && n(t)
                    }
                }.bind(this);
                u.addAnimation(e, t, NativeModulesDeprecated/*o*/)
            },
            startAnimations: function(e, t) {
                var n = 0,
                    r = 0,
                    i = e.length,
                    NativeModulesDeprecated/*o*/ = function(e) {
                        e && ++r, ++n === i && t && t(r === i)
                    };
                e.forEach(function(e) {
                    warning/*l*/(null != e.ref || null != e.nodeHandle && !e.ref != !e.nodeHandle, "Animations must be specified with either ref xor nodeHandle"), e.ref ? this.startAnimation(e.ref, e.anim, NativeModulesDeprecated/*o*/) : e.nodeHandle && this.startAnimationWithNodeHandle(e.nodeHandle, e.anim, NativeModulesDeprecated/*o*/)
                }.bind(this))
            },
            stopNodeHandleAnimations: function(e) {
                if (this.state._currentAnimationsByNodeHandle[e]) {
                    for (var t = this.state._currentAnimationsByNodeHandle[e], n = 0; n < t.length; n++) {
                        var r = t[n];
                        r && u.removeAnimation(+e, r)
                    }
                    this.state._currentAnimationsByNodeHandle[e] = void 0
                }
            },
            stopAnimations: function(e) {
                this.refs[e] || invariant/*s*/(0, "invalid ref"), this.stopNodeHandleAnimations(this.refs[e].getNodeHandle())
            },
            stopAllAnimations: function() {
                for (var e in this.state._currentAnimationsByNodeHandle) this.stopNodeHandleAnimations(e)
            },
            animateToFrame: function(e, t, n, r, i) {
                var NativeModulesDeprecated/*o*/ = {
                    x: t.left + t.width / 2,
                    y: t.top + t.height / 2,
                    w: t.width,
                    h: t.height
                };
                t = void 0;
                var r = r || [0, 0],
                    invariant/*s*/ = POPAnimation/*a*/.createAnimation(n, {
                        property: POPAnimation/*a*/.Properties.position,
                        toValue: [NativeModulesDeprecated/*o*/.x, NativeModulesDeprecated/*o*/.y],
                        velocity: r
                    }),
                    warning/*l*/ = POPAnimation/*a*/.createAnimation(n, {
                        property: POPAnimation/*a*/.Properties.size,
                        toValue: [NativeModulesDeprecated/*o*/.w, NativeModulesDeprecated/*o*/.h]
                    });
                this.startAnimation(e, invariant/*s*/, i), this.startAnimation(e, warning/*l*/)
            },
            componentWillUnmount: function() {
                this.stopAllAnimations()
            }
        };
    i.exports = c
});