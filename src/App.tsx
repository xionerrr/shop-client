import { AppRoutes } from 'routes'

import * as S from 'styles/app'

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
