"use strict";

angular.module("post").factory("post", function ($resource) {
  return $resource(
    "/json/posts.json",
    {},
    {
      query: {
        method: "GET",
        params: {},
        isArray: true,
        cache: true,
      },
      get: {
        method: "GET",
        // params: {},
        isArray: true,
        cache: true,
      },
    }
  );
});
