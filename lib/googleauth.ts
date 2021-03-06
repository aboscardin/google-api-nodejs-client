// Copyright 2012-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This code has been moved to the google-auth-library repo, at
 * https://github.com/google/google-auth-library-nodejs.
 *
 * Please update your references to point to the google-auth-library implementation,
 * rather than this file.
 */

export = {
   utils: require('google-auth-library/lib/utils.js'),
   authClient: require('google-auth-library/lib/auth/authclient.js'),
   computeclient: require('google-auth-library/lib/auth/computeclient.js'),
   jwtclient: require('google-auth-library/lib/auth/jwtclient.js'),
   loginticket: require('google-auth-library/lib/auth/loginticket.js'),
   oauth2client: require('google-auth-library/lib/auth/oauth2client.js'),
   transporters: require('google-auth-library/lib/transporters.js'),
   pemverifier: require('google-auth-library/lib/pemverifier.js'),
}

