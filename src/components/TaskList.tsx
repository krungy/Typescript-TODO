import styled from "@emotion/styled";

const TaskList = () => {
  return (
    <UnorderedList>
      
    </UnorderedList>
  )
}

export default TaskList;

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`