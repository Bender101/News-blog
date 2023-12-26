import { useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { Button } from "@/shared/ui/deprecated/Button";

export const Counter = () => {
  const counterValue = useCounterValue();
  const { add, increment, decrement } = useCounterActions();

  const incrementHandle = () => {
    increment();
  };

  const decrementHandle = () => {
    decrement();
  };

  const addHandle = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="add5-btn" onClick={addHandle}>
        add5
      </Button>
      <Button data-testid="increment-btn" onClick={incrementHandle}>
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrementHandle}>
        decrement
      </Button>
    </div>
  );
};
