package com.margelo.nitro.rnhnetinfo
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class RNHNetinfo : HybridRNHNetinfoSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
