
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 50000, years: 10, rate: 6.4};
  expect (calculateMonthlyPayment(values)).toEqual = 565.20 
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 50000, years: 10, rate: 6.4};
  expect (calculateMonthlyPayment(values)).toEqual = 565.20
});

