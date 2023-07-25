# Native base replacement

I had to use Native base on one of my projects. I was not happy with the [performance of the library](https://github.com/GeekyAnts/NativeBase/issues/4302) and the team also stopped maintaining it. So I decided to replace it with my own, custom implementation.

The replacement had to be as painless as possible, so I decided to keep a similar API as Native base. This way, I could just replace the import statements and everything would, theoretically, work as before.

The main similarity is with the utility props which Native base uses. The utility props implementation is heavily inspired by [styled-components](https://styled-components.com/) and [styled-system](https://github.com/styled-system/styled-system).

If you want to use this implementation, but with some of your additions, the most important files for you to focus on are:

- All of the files in the [`src/styled/props`](https://github.com/kapobajza/native-base-replacement/blob/d0f7f09c2100d5967f7331b5f1ea06c0ff5ebc19/src/styled/props) folder
- And the styled HoC: [`src/styled/styled`](https://github.com/kapobajza/native-base-replacement/blob/d0f7f09c2100d5967f7331b5f1ea06c0ff5ebc19/src/styled/styled.ts#L11-L475)

Feel free to fork, c/p or do whatever you want with this repo.

Happy coding!

## Usage

If you want your component to have access to the [utility props](https://github.com/kapobajza/native-base-replacement/blob/d0f7f09c2100d5967f7331b5f1ea06c0ff5ebc19/src/styled/styled.ts#L22-L147) (like `margin`, `padding`, `flex`, etc.), you should wrap them in the [`src/styled/styled`](https://github.com/kapobajza/native-base-replacement/blob/d0f7f09c2100d5967f7331b5f1ea06c0ff5ebc19/src/styled/styled.ts#L11-L475) HoC.

```typescript
import { TouchableWithoutFeedback } from 'react-native';
import { styled } from '~/styled';

const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback);

const MyComponent = () => (
  /* StyledTouchableWithoutFeedback will now have access to all of the utility props */
  <StyledTouchableWithoutFeedback
    margin="4" // Equal to 16, because 4x4 = 16
    padding="3" // Equal to 12, because 3x4 = 12
    flex={1}
    backgroundColor="primary.100"
  />
);
```
