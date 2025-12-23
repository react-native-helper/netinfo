#include <jni.h>
#include "rnhnetinfoOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::rnhnetinfo::initialize(vm);
}
