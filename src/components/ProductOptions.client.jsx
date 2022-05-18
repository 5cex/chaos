import {useProduct} from '@shopify/hydrogen/client';
import DebugWrapper from './DebugWrapper';

/**
 * A client component that tracks a selected variant and/or selling plan state, as well as callbacks for modifying the state
 */
export default function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  return (
    <DebugWrapper name="Product Options" shopify>
      {options.map(({name, values}) => {
        return (
          <fieldset key={name} className="mt-4">
            <legend className="mb-2 font-medium">{name}</legend>

            <div className="flex items-center flex-wrap gap-2">
              {values.map((value) => {
                const checked = selectedOptions[name] === value;
                const id = `option-${name}-${value}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      className="sr-only"
                      type="radio"
                      id={id}
                      name={`option[${name}]`}
                      value={value}
                      checked={checked}
                      onChange={() => setSelectedOption(name, value)}
                    />
                    <div
                      className={`p-2 border cursor-pointer text-sm ${
                        checked ? 'bg-gray-900 text-white' : 'text-gray-900'
                      }`}
                    >
                      {value}
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </DebugWrapper>
  );
}
