/*
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function formatSuffix(date) {
    return date.toISOString().substr(0,10).replaceAll('-', '');
}

function subtractDays(date, days) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    return new Date(date.getTime() - days * MS_PER_DAY);
}
function incrementalSuffixStart() {
    return formatSuffix(subtractDays(new Date(), parseInt(dataform.projectConfig.vars.ga4_incremental_processing_days_back)));
}
function incrementalSuffixEnd() {
    return formatSuffix(new Date());
}

const browserUniqueColumns = [
  "device_category", 
  "device_os",
  "device_os_version",
  "device_web_browser",
  "normalized_device_web_browser_version",
];

const deviceUniqueColumns = ["device_category", 
  "device_mobile_brand_name",
  "device_mobile_model_name",
  "device_model",
  "device_os",
  "device_os_version",
  "device_web_browser",
  "device_web_browser_version",
  "device_advertising_id",
  "app_store",
  "app_version",
  "language"];

const normalizedDeviceUniqueColumns = ["device_category", 
  "device_mobile_brand_name",
  "device_mobile_model_name",
  "device_model",
  "device_os",
  "device_os_version",
  "device_web_browser",
  "normalized_device_web_browser_version",
  "device_advertising_id",
  "app_store",
  "app_version",
  "normalized_language"];

const eventUniqueColumns = [
    "user_pseudo_id",
    "ga_session_id", 
    "event_timestamp",
    "event_name"
];

const locationUniqueColumns = [
    "continent", 
    "subcontinent", 
    "country", 
    "region", 
    "city", 
    "metro"
];

const trafficSourceUniqueColumns = [
    "traffic_source",
    "traffic_source_name",
    "traffic_source_medium"
];

const eventTypeTagged = "tagged";

const eventTypePredicted = "predictive";

const eventTypeCustom = "custom";

module.exports = {incrementalSuffixStart, incrementalSuffixEnd, 
deviceUniqueColumns, normalizedDeviceUniqueColumns,
eventUniqueColumns, locationUniqueColumns, trafficSourceUniqueColumns,
browserUniqueColumns, eventTypeTagged, eventTypePredicted, eventTypeCustom };

