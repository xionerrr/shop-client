import { AppRoutes } from 'routes'
import * as S from 'styles/App'
import { GlobalStyles } from 'styles/global'

const App = () => {
  return (
    <S.App>
      <AppRoutes />
      <GlobalStyles />
    </S.App>
  )
}

export default App
