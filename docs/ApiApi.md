# Minesweeper.ApiApi

All URIs are relative to *https://minesweeper-adorda.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DocsList**](ApiApi.md#v1DocsList) | **GET** /api/v1/docs | 
[**v1GamesCreate**](ApiApi.md#v1GamesCreate) | **POST** /api/v1/games | Starts a new game
[**v1GamesRead**](ApiApi.md#v1GamesRead) | **GET** /api/v1/games/{game_id} | Retrieves a game by id
[**v1GamesUpdate**](ApiApi.md#v1GamesUpdate) | **PUT** /api/v1/games | Marks a position in a game


<a name="v1DocsList"></a>
# **v1DocsList**
> v1DocsList()



### Example
```javascript
var Minesweeper = require('minesweeper');

var apiInstance = new Minesweeper.ApiApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1DocsList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v1GamesCreate"></a>
# **v1GamesCreate**
> v1GamesCreate(opts)

Starts a new game

Starts a new game

### Example
```javascript
var Minesweeper = require('minesweeper');

var apiInstance = new Minesweeper.ApiApi();

var opts = { 
  'data': new Minesweeper.Data2() GameStart
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1GamesCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Data2**](GameStart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="v1GamesRead"></a>
# **v1GamesRead**
> v1GamesRead(gameId)

Retrieves a game by id

Retrieves a game by id

### Example
```javascript
var Minesweeper = require('minesweeper');

var apiInstance = new Minesweeper.ApiApi();

var gameId = "gameId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1GamesRead(gameId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="v1GamesUpdate"></a>
# **v1GamesUpdate**
> v1GamesUpdate(opts)

Marks a position in a game

Marks a position in a game

### Example
```javascript
var Minesweeper = require('minesweeper');

var apiInstance = new Minesweeper.ApiApi();

var opts = { 
  'data': new Minesweeper.Data1() GameMark
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1GamesUpdate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Data1**](GameMark.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

