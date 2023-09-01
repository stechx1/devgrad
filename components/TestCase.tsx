import { Button } from 'antd';

interface TestCaseProps {
  number: string;
  name: string;
  buttonText: string;
  icon: React.ReactNode;
}

export const TestCase: React.FC<TestCaseProps> = ({
  number,
  name,
  buttonText,
  icon,
}) => {
  return (
    <div className='bg-[#f3f4f6] p-2'>
      <div className='flex justify-between items-center'>
        <div className='bg-[#333] px-2 py-1 rounded'>
          <p className='text-white'>{number}</p>
        </div>

        <div>
          <p>{name}</p>
        </div>

        <div>
          <Button icon={icon}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
