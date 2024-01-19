import * as React from 'react';
import { Icon } from '@iconify/react';

function KnowledgeBaseToggle({ children, toggleName, initialActive, initialLastChildren }) {
  const [isActive, setIsActive] = React.useState(initialActive);
  const [isLastChildren, setIsLastChildren] =
    React.useState(initialLastChildren);

  const handleToggleClicked = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${
        isLastChildren ? 'rounded-b-lg pb-[15px] pt-3' : 'pt-3'
      } bg-[#2E353E] text-[#ccc] px-[15px]`}
    >
      <div
        className={`flex justify-between items-center w-full overflow-hidden ${
          isActive
            ? 'bg-[#0088cc] text-white'
            : 'bg-[#282D36] text-[#0088cc] border-l-2 border-[#0088cc]'
        }  px-3 py-2.5 rounded cursor-pointer`}
        onClick={handleToggleClicked}
      >
        <div className="flex items-center gap-1 text-[15px]">
          <Icon
            icon={`typcn:${isActive ? 'minus' : 'plus'}`}
            className="inline-block"
          />
          {toggleName}
        </div>
        <Icon
          icon={`teenyicons:${isActive ? 'down' : 'right'}-solid`}
          width="12"
          height="12"
        />
      </div>
      <div
        className={`${
          isActive ? 'max-h-[3000px]' : 'max-h-[0px]'
        } overflow-hidden transition-all delay-200`}
      >
        {children}
      </div>
    </div>
  );
}

export default KnowledgeBaseToggle;
