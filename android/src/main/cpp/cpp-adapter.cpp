#include <jni.h>
#include "RNHNetInfoOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::RNHNetInfo::initialize(vm);
}
