package com.margelo.nitro.reactnativehelper.netinfo
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class RNHNetInfo : HybridRNHNetInfoSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
