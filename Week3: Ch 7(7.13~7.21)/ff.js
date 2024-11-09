const CarManager = {
  requestInfo: function (model, id) {
    return `The information for ${model} with ID ${id} is foobar`;
  },

  // .. 다른 메서드들
};

CarManager.execute = function (name) {
  return (
    CarManager[name] &&
    CarManager[name].apply(CarManager, [].slice.call(arguments, 1))
  );
};

CarManager.execute("requestInfo", "Ford Mondeo", "54323");
