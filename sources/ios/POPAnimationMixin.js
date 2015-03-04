__d("POPAnimationMixin",["NativeModulesDeprecated","POPAnimation","invariant","warning"],function (global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
    "use strict";
    var NativeModulesDeprecated/*o*/ = require/*t*/("NativeModulesDeprecated"),
        POPAnimation/*a*/ = require/*t*/("POPAnimation"),
        invariant/*s*/ = require/*t*/("invariant"),
        warning/*l*/ = require/*t*/("warning"),
        u = NativeModulesDeprecated/*o*/.RKPOPAnimationManager,
        c = {
            AnimationTypes: POPAnimation/*a*/.Types,
            AnimationProperties: POPAnimation/*a*/.Properties,
            getInitialState: function() {
                return {
                    _currentAnimationsByNodeHandle: {}
                }
            },
            _ensureBookkeepingSetup: function(global/*e*/) {
                this.state._currentAnimationsByNodeHandle[global/*e*/] || (this.state._currentAnimationsByNodeHandle[global/*e*/] = [])
            },
            startAnimation: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                var requireLazy/*r*/ = 0;
                "number" == typeof require/*t*/ ? requireLazy/*r*/ = require/*t*/ : (require/*t*/ instanceof Object && void 0 !== require/*t*/.type && void 0 !== require/*t*/.property || invariant/*s*/(0, "Animation definitions must specify POPAnimation/*a*/ type of animation and POPAnimation/*a*/ property to animate."), requireLazy/*r*/ = POPAnimation/*a*/.createAnimation(require/*t*/.type, require/*t*/)), this.refs[global/*e*/] || invariant/*s*/(0, "Invalid refKey " + global/*e*/ + " for anim:\requireDynamic/*n*/" + JSON.stringify(require/*t*/) + "\nvalid refs: " + JSON.stringify(Object.keys(this.refs)));
                var module/*i*/ = this.refs[global/*e*/].getNodeHandle();
                this.startAnimationWithNodeHandle(module/*i*/, requireLazy/*r*/, requireDynamic/*n*/)
            },
            startAnimationWithNodeHandle: function(global/*e*/, require/*t*/, requireDynamic/*n*/) {
                this._ensureBookkeepingSetup(global/*e*/);
                var requireLazy/*r*/ = this.state._currentAnimationsByNodeHandle[global/*e*/],
                    module/*i*/ = requireLazy/*r*/.length;
                requireLazy/*r*/.push(require/*t*/);
                var NativeModulesDeprecated/*o*/ = function(require/*t*/) {
                    if (this.isMounted()) {
                        requireLazy/*r*/[module/*i*/] = 0;
                        for (var NativeModulesDeprecated/*o*/ = !0, POPAnimation/*a*/ = 0; POPAnimation/*a*/ < requireLazy/*r*/.length; POPAnimation/*a*/++)
                            if (requireLazy/*r*/[POPAnimation/*a*/]) {
                                NativeModulesDeprecated/*o*/ = !1;
                                break
                            }
                        NativeModulesDeprecated/*o*/ && (this.state._currentAnimationsByNodeHandle[global/*e*/] = void 0), requireDynamic/*n*/ && requireDynamic/*n*/(require/*t*/)
                    }
                }.bind(this);
                u.addAnimation(global/*e*/, require/*t*/, NativeModulesDeprecated/*o*/)
            },
            startAnimations: function(global/*e*/, require/*t*/) {
                var requireDynamic/*n*/ = 0,
                    requireLazy/*r*/ = 0,
                    module/*i*/ = global/*e*/.length,
                    NativeModulesDeprecated/*o*/ = function(global/*e*/) {
                        global/*e*/ && ++requireLazy/*r*/, ++requireDynamic/*n*/ === module/*i*/ && require/*t*/ && require/*t*/(requireLazy/*r*/ === module/*i*/)
                    };
                global/*e*/.forEach(function(global/*e*/) {
                    warning/*l*/(null != global/*e*/.ref || null != global/*e*/.nodeHandle && !global/*e*/.ref != !global/*e*/.nodeHandle, "Animations must be specified with either ref xor nodeHandle"), global/*e*/.ref ? this.startAnimation(global/*e*/.ref, global/*e*/.anim, NativeModulesDeprecated/*o*/) : global/*e*/.nodeHandle && this.startAnimationWithNodeHandle(global/*e*/.nodeHandle, global/*e*/.anim, NativeModulesDeprecated/*o*/)
                }.bind(this))
            },
            stopNodeHandleAnimations: function(global/*e*/) {
                if (this.state._currentAnimationsByNodeHandle[global/*e*/]) {
                    for (var require/*t*/ = this.state._currentAnimationsByNodeHandle[global/*e*/], requireDynamic/*n*/ = 0; requireDynamic/*n*/ < require/*t*/.length; requireDynamic/*n*/++) {
                        var requireLazy/*r*/ = require/*t*/[requireDynamic/*n*/];
                        requireLazy/*r*/ && u.removeAnimation(+global/*e*/, requireLazy/*r*/)
                    }
                    this.state._currentAnimationsByNodeHandle[global/*e*/] = void 0
                }
            },
            stopAnimations: function(global/*e*/) {
                this.refs[global/*e*/] || invariant/*s*/(0, "invalid ref"), this.stopNodeHandleAnimations(this.refs[global/*e*/].getNodeHandle())
            },
            stopAllAnimations: function() {
                for (var global/*e*/ in this.state._currentAnimationsByNodeHandle) this.stopNodeHandleAnimations(global/*e*/)
            },
            animateToFrame: function(global/*e*/, require/*t*/, requireDynamic/*n*/, requireLazy/*r*/, module/*i*/) {
                var NativeModulesDeprecated/*o*/ = {
                    x: require/*t*/.left + require/*t*/.width / 2,
                    y: require/*t*/.top + require/*t*/.height / 2,
                    w: require/*t*/.width,
                    h: require/*t*/.height
                };
                require/*t*/ = void 0;
                var requireLazy/*r*/ = requireLazy/*r*/ || [0, 0],
                    invariant/*s*/ = POPAnimation/*a*/.createAnimation(requireDynamic/*n*/, {
                        property: POPAnimation/*a*/.Properties.position,
                        toValue: [NativeModulesDeprecated/*o*/.x, NativeModulesDeprecated/*o*/.y],
                        velocity: requireLazy/*r*/
                    }),
                    warning/*l*/ = POPAnimation/*a*/.createAnimation(requireDynamic/*n*/, {
                        property: POPAnimation/*a*/.Properties.size,
                        toValue: [NativeModulesDeprecated/*o*/.w, NativeModulesDeprecated/*o*/.h]
                    });
                this.startAnimation(global/*e*/, invariant/*s*/, module/*i*/), this.startAnimation(global/*e*/, warning/*l*/)
            },
            componentWillUnmount: function() {
                this.stopAllAnimations()
            }
        };
    module/*i*/.exports = c
});