import { nanoid } from 'nanoid';
import styles from './checkbox.module.css';
import React from 'react';

type FilterOptions = {
  [key: string]:
    | {
        value: string;
        label: string;
        options?: { value: string; label: string }[];
      }[]
    | {
        group: string;
        options: {
          value: string;
          label: string;
          options?: { value: string; label: string }[];
        }[];
      }[];
};

const Checkbox = ({ filterOptions }: { filterOptions: FilterOptions }) => {
  console.log(filterOptions);

  return (
    <>
      {/* Looping over an array of keys of the object ['strategy', 'asset class', ...] */}
      {Object.keys(filterOptions).map((option: string) => {
        const optionKey = nanoid();

        return (
          <div key={optionKey} className={styles.checkbox}>
            <div className={styles['checkbox__select']}>
              <select className={styles['checkbox__select-element']}>
                <option>{option}</option>
              </select>
              <span className={styles['checkbox__select-title']}>
                {option}

                <img
                  className={styles['checkbox__select-title-icon']}
                  src="images/chevron-down-orange.svg"
                  alt="chevron down"
                />
              </span>
            </div>

            {/* For each filter category (represented by the keys in filterOptions),
          map over the corresponding array of options and render checkboxes
          based on the shape of each option item   */}
            <div className={styles['checkbox-options']}>
              {filterOptions[option].map((item, index) => {
                const checkboxId = `${optionKey}-${index}`;

                if ('group' in item) {
                  // Handle the case when item is a grouped option
                  return (
                    <div
                      key={`${checkboxId}-group`}
                      className={styles['checkbox-options__item']}
                    >
                      <p className={styles['checkbox-options__item-title']}>
                        {item.group}
                      </p>

                      {item.options.map((option, index) => (
                        <div key={`${checkboxId}-group-${index}`}>
                          <div
                            className={styles['checkbox-options__item-label']}
                          >
                            <input
                              type="checkbox"
                              id={`${checkboxId}-${index}`}
                              name={option.value}
                              value={option.value}
                            />
                            <label htmlFor={`${checkboxId}-${index}`}>
                              {option.label}
                            </label>
                          </div>

                          {option.options && (
                            <div>
                              {option.options.map((innerOption, index) => (
                                <React.Fragment
                                  key={`${checkboxId}-group-${index}`}
                                >
                                  <div>
                                    <input
                                      type="checkbox"
                                      id={`${checkboxId}-innerOption-${index}`}
                                      name={innerOption.value}
                                      value={innerOption.value}
                                    />
                                    <label
                                      htmlFor={`${checkboxId}-innerOption-${index}`}
                                    >
                                      {innerOption.label}
                                    </label>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                } else {
                  // Handle the case when item is a simple option
                  return (
                    <div key={`${checkboxId}-no-group`}>
                      <div className={styles['checkbox-options__item-label']}>
                        <input
                          type="checkbox"
                          id={checkboxId}
                          name={item.value}
                          value={item.value}
                        />
                        <label
                          className={styles['checkbox__label']}
                          htmlFor={checkboxId}
                        >
                          {item.label}
                        </label>
                      </div>
                      {item.options && (
                        <div>
                          {item.options.map((innerOption, index) => (
                            <React.Fragment
                              key={`${checkboxId}-innerOption-${index}`}
                            >
                              <div>
                                <input
                                  type="checkbox"
                                  id={`${checkboxId}-innerOption-${index}`}
                                  name={innerOption.value}
                                  value={innerOption.value}
                                />
                                <label
                                  className={styles['checkbox__label']}
                                  htmlFor={`${checkboxId}-innerOption-${index}`}
                                >
                                  {innerOption.label}
                                </label>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Checkbox;
