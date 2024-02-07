
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNNetinfoSpec.h"

@interface Netinfo : NSObject <NativeNetinfoSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Netinfo : NSObject <RCTBridgeModule>
#endif

@end
