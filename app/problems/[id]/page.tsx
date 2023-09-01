'use client';
import React, { useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Button, Select, Tabs } from 'antd';
import { Collapse } from 'antd';
import { Description } from '@/components/Description';
import { Editorial } from '@/components/Editorial';
import { Solutions } from '@/components/Solutions';
import { Submissions } from '@/components/Submissions';
import { source } from '@/lib/utils/font';
import { TestCase } from '@/components/TestCase';
import { CaretRightOutlined, CheckOutlined } from '@ant-design/icons';

const ProblemPage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState('idle');
  const [language, setLanguage] = useState('javascript');
  const [icon, setIcon] = useState(<CaretRightOutlined />);

  const handleRunClick = () => {
    if (state === 'idle') {
      setLoading(true);
      setState('Inprogress');
    }
    setTimeout(() => {
      setLoading(false);
      setState('success');
      setIcon(<CheckOutlined />);
    }, 4000);
  };

  const buttonTextGetter = () => {
    if (state === 'idle') {
      return 'Play Testcase';
    } else if (state === 'Inprogress') {
      return 'In Progress';
    } else if (state === 'failed') {
      return 'Try Again';
    } else if (state === 'success') {
      return 'Success';
    } else {
      return '';
    }
  };

  const tests = [
    {
      id: '1',
      number: '01',
      name: 'Test Case name 1',
      buttonText: buttonTextGetter(),
      icon,
    },
    // {
    //   id: '2',
    //   number: '02',
    //   name: 'Test Case name 2',
    //   buttonText: buttonTextGetter(),
    //   icon,
    // },
    // {
    //   id: '3',
    //   number: '03',
    //   name: 'Test Case name 3',
    //   buttonText: buttonTextGetter(),
    //   icon,
    // },
  ];

  const items = [
    {
      id: '1',
      label: (
        <div className='flex justify-between'>
          <p>{'Test Cases'}</p>
        </div>
      ),
      children: (
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <Button onClick={handleRunClick} icon={<CaretRightOutlined />}>Play All Testcases</Button>
            <Button type='primary'>Submit</Button>
          </div>
          <div className='flex flex-col justify-between'>
            {tests.map((test) => (
              <TestCase
                handleRunClick={handleRunClick}
                loading={loading}
                key={test.id}
                number={test.number}
                name={test.name}
                buttonText={test.buttonText}
                icon={test.icon}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  const problem = {
    id: '1',
    heading: '1. Two Sum',
    difficulty: 'Easy',
    statement: (
      <div className='space-y-4'>
        <p>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
        </p>
        <p>
          You may assume that each input would have exactly one solution, and
          you may not use the same element twice.
        </p>
        <p>You can return the answer in any order.</p>
      </div>
    ),
    examples: (
      <div className='space-y-2'>
        <div>
          <p className='font-bold'>Example 1</p>
          <div className='flex flex-col '>
            <p>
              Input:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                nums = [2,7,11,15], target = 9
              </span>
            </p>
            <p>
              Output:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                [0, 1]
              </span>
            </p>
            <p>
              Explanation:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                Because nums[0] + nums[1] === 9, we return [0, 1]
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className='font-bold'>Example 2</p>
          <div className='flex flex-col '>
            <p>
              Input:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                nums = [2,7,11,15], target = 9
              </span>
            </p>
            <p>
              Output:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                [0, 1]
              </span>
            </p>
            <p>
              Explanation:{' '}
              <span className={`text-gray-600 ${source.className}`}>
                Because nums[0] + nums[1] === 9, we return [0, 1]
              </span>
            </p>
          </div>
        </div>
      </div>
    ),
  };
  const tabs = [
    {
      key: '1',
      label: 'Description',
      children: <Description problem={problem} />,
    },
    {
      key: '2',
      label: 'Editorial',
      children: <Editorial />,
    },
    {
      key: '3',
      label: 'Solutions',
      children: <Solutions />,
    },
    {
      key: '4',
      label: 'Submissions',
      children: <Submissions />,
    },
  ];

  return (
    <div className='container mx-auto h-screen pt-8'>
      <div className=' gap-6 md:grid md:grid-cols-2'>
        <div className='rounded bg-[#f3f4f6] px-6 pt-2'>
          <Tabs defaultActiveKey='1' items={tabs} />
        </div>
        <div className='md:h-[90vh]'>
          <div>
            <Select
              defaultValue='Javascript'
              style={{ width: 120, marginBottom: 20 }}
              onChange={(value) => setLanguage(value)}
              options={[
                { value: 'javascript', label: 'Javascript' },
                { value: 'python', label: 'Python' },
                { value: 'java', label: 'Java' },
                { value: 'typescript', label: 'Typescript' },
                { value: 'css', label: 'css' },
                { value: 'html', label: 'html' },
                { value: 'scss', label: 'scss' },
                { value: 'xml', label: 'xml' },
                { value: 'php', label: 'php' },
                { value: 'c#', label: 'C#' },
                { value: 'c++', label: 'C++' },
                { value: 'ruby', label: 'Ruby' },
              ]}
            />
          </div>
          <Editor
            height='50vh'
            language={language}
            defaultLanguage='javascript'
            defaultValue={`/**
            * @param {number[]} nums
            * @param {number} target
            * @return {number[]}
            */
           var twoSum = function(nums, target) {
               
           };`}
          />
          <div className='w-full md:h-[10vh]'>
            <Collapse ghost items={items} defaultActiveKey={['1']} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
