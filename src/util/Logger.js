/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// Note: The reason to create a separate logger (instead of placing these
// functions in util/Util) is because this is used in places like Bundles that
// need to be loaded before Okta is defined.
define(['okta/underscore', 'shared/util/Logger'], function (_, Logger) {

  return _.extend(Logger, {

    deprecate: function (msg) {
      Logger.warn('[okta-signin-widget] DEPRECATED:', msg);
    }

  });

});
