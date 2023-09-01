'use client';
import React, { useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Button, Tabs } from 'antd';
import { Collapse } from 'antd';
import { Description } from '@/components/Description';
import { Editorial } from '@/components/Editorial';
import { Solutions } from '@/components/Solutions';
import { Submissions } from '@/components/Submissions';
import { source } from '@/lib/utils/font';
import { TestCase } from '@/components/TestCase';
import { CaretRightOutlined } from '@ant-design/icons';

const ProblemPage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(false);
  const handleRunClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const tests = [
    {
      id: '1',
      number: '01',
      name: 'Test Case name 1',
      buttonText: 'Play TestCase',
      icon: <CaretRightOutlined />,
    },
    {
      id: '2',
      number: '02',
      name: 'Test Case name 2',
      buttonText: 'Play TestCase',
      icon: <CaretRightOutlined />,
    },
    {
      id: '3',
      number: '03',
      name: 'Test Case name 3',
      buttonText: 'Play TestCase',
      icon: <CaretRightOutlined />,
    },
  ];

  const items = [
    {
      id: '1',
      label: (
        <div className='flex justify-between'>
          <p>{'Test Cases'}</p>
          <div className='flex gap-2'>
            <Button icon={<CaretRightOutlined />}>Play All Testcases</Button>
            <Button type='primary'>Submit</Button>
          </div>
        </div>
      ),
      children: (
        <div className='flex flex-col justify-between'>
          {tests.map((test) => (
            <TestCase
              key={test.id}
              number={test.number}
              name={test.name}
              buttonText={test.buttonText}
              icon={test.icon}
            />
          ))}
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
          <Editor
            height='50vh'
            defaultLanguage='java'
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
