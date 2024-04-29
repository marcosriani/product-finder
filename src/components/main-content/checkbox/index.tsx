import { nanoid } from 'nanoid';
import styles from './checkbox.module.css';
import React from 'react';
import { CheckboxProps } from '../../../types/common';

const Checkbox = ({
  filterOptions,
  selectedOptions,
  selectedOptionsHandler,
}: CheckboxProps) => {
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

                      {item.options.map((option) => (
                        <div key={option.id}>
                          <div
                            className={styles['checkbox-options__item-label']}
                          >
                            <input
                              type="checkbox"
                              id={option.id}
                              name={option.value}
                              value={option.value}
                              checked={selectedOptions.includes(option.value)}
                              onChange={selectedOptionsHandler}
                            />
                            <label htmlFor={option.id}>{option.label}</label>
                          </div>

                          {option.options && (
                            <div>
                              {option.options.map((innerOption) => (
                                <React.Fragment key={innerOption.id}>
                                  <div
                                    className={
                                      styles[
                                        'checkbox-options__item-label-nested-items'
                                      ]
                                    }
                                  >
                                    <input
                                      type="checkbox"
                                      id={innerOption.id}
                                      name={innerOption.value}
                                      value={innerOption.value}
                                      checked={selectedOptions.includes(
                                        innerOption.value
                                      )}
                                      onChange={selectedOptionsHandler}
                                    />
                                    <label htmlFor={innerOption.id}>
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
                    <div key={item.id}>
                      <div className={styles['checkbox-options__item-label']}>
                        <input
                          type="checkbox"
                          id={item.id}
                          name={item.value}
                          value={item.value}
                          checked={selectedOptions.includes(item.value)}
                          onChange={selectedOptionsHandler}
                        />
                        <label
                          className={styles['checkbox__label']}
                          htmlFor={item.id}
                        >
                          {item.label}
                        </label>
                      </div>
                      {item.options && (
                        <div>
                          {item.options.map((innerOption) => (
                            <React.Fragment key={innerOption.id}>
                              <div>
                                <input
                                  type="checkbox"
                                  id={innerOption.id}
                                  name={innerOption.value}
                                  value={innerOption.value}
                                  checked={selectedOptions.includes(
                                    innerOption.value
                                  )}
                                  onChange={selectedOptionsHandler}
                                />
                                <label
                                  className={styles['checkbox__label']}
                                  htmlFor={innerOption.id}
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
