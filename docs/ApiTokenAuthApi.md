# Minesweeper.ApiTokenAuthApi

All URIs are relative to *https://minesweeper-adorda.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ApiTokenAuthApi.md#create) | **POST** /api-token-auth/ | 


<a name="create"></a>
# **create**
> create(opts)



### Example
```javascript
var Minesweeper = require('minesweeper');

var apiInstance = new Minesweeper.ApiTokenAuthApi();

var opts = { 
  'data': new Minesweeper.Data() User
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.create(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Data**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

