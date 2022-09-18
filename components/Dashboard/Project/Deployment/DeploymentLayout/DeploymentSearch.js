import React from "react";
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const people = [
  { id: 1, name: 'Main'},
]



export default function DeploymentSearch() {

  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((branch) =>
          branch.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )


  return (
    <div className="flex items-center justify-between">
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
      <div className="flex sm:!flex-row flex-col flex-wrap gap-1 py-4">
      <div className="flex items-center mr-4">
        <input
          id="ready-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-green-400 bg-gray-100 rounded-lg focus:!ring-0 border-gray-300 "
        />
        <label
          htmlFor="ready-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Ready
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="error-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-red-600 bg-gray-100 rounded-lg focus:!ring-0 border-gray-300 "
        />
        <label
          htmlFor="error-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Error
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="building-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 !text-yellow-600 bg-gray-100 rounded-lg focus:!ring-0 border-gray-300 "
        />
        <label
          htmlFor="building-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Building
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="queued-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 !text-gray-500 bg-gray-100 rounded-lg focus:!ring-0 border-gray-300 "
        />
        <label
          htmlFor="queued-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Queued
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="canceled-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 !text-gray-500 bg-gray-100 rounded-lg focus:!ring-0 border-gray-300 "
        />
        <label
          htmlFor="canceled-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Canceled
        </label>
      </div>

      </div>


      <div >
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative z-20">
          <div className="relative w-full cursor-default overflow-hidden  bg-transparent text-left">
            <Combobox.Input
              className="w-full border-[1px] rounded-lg py-1.5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              placeholder="All branches..."
              displayValue={(branch) => branch.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto !rounded-md bg-white py-1 px-1 text-base shadow-lg !text-[0.9rem]">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((branch) => (
                  <Combobox.Option
                    key={branch.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-gray-300 text-black rounded-md' : 'text-gray-900'
                      }`
                    }
                    value={branch}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {branch.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
    </div>
  );
}
