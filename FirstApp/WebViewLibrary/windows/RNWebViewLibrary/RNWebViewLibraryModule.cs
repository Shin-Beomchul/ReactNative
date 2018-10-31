using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Web.View.Library.RNWebViewLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNWebViewLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNWebViewLibraryModule"/>.
        /// </summary>
        internal RNWebViewLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNWebViewLibrary";
            }
        }
    }
}
