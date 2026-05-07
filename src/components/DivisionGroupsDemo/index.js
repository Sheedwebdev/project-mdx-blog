import dynamic from 'next/dynamic';

const DivisionGroupsDemo = dynamic(() => 
    import('@/components/DivisionGroupsDemo')
  )

export default DivisionGroupsDemo;