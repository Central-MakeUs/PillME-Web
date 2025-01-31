import { BrowserRouter, Route, Routes } from 'react-router';
import { CategoryPage } from './pages/category';
import { CategoryResultPage } from './pages/category/result';
import { ConsultationPage } from './pages/consultation';
import { ConsultationDetailPage } from './pages/consultation/detail';
import { ConsultationNewPage } from './pages/consultation/new';
import { ConsultationCompletePage } from './pages/consultation/new/complete';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { MyPage } from './pages/mypage';
import { OnboardingPage } from './pages/onboarding';
import { PillboxPage } from './pages/pillbox';
import { PillboxManagePage } from './pages/pillbox/manage';
import { PillboxNewPage } from './pages/pillbox/new';
import { ProductPage } from './pages/product';
import { ProductIngredientPage } from './pages/product/ingredient';
import { RegisterPage } from './pages/register';
import { SearchPage } from './pages/search';
import { SearchResultPage } from './pages/search/result';
import { UserInfoPage } from './pages/userinfo';
import { BottomNavigationLayout } from './ui/layout/bottom-navigation-layout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<OnboardingPage />} />
        <Route element={<BottomNavigationLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="pillbox" element={<PillboxPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="userinfo" element={<UserInfoPage />} />
        <Route path="search">
          <Route path=":searchType">
            <Route index element={<SearchPage />} />
            <Route path="result" element={<SearchResultPage />} />
          </Route>
        </Route>
        <Route path="product">
          <Route path=":productId">
            <Route index element={<ProductPage />} />
            <Route path="ingredient" element={<ProductIngredientPage />} />
          </Route>
        </Route>
        <Route path="pillbox">
          <Route path="manage" element={<PillboxManagePage />} />
          <Route path="new" element={<PillboxNewPage />} />
        </Route>

        <Route path="consultation">
          <Route path=":consultId" element={<ConsultationDetailPage />} />
          <Route path="new">
            <Route index element={<ConsultationNewPage />} />
            <Route path="complete" element={<ConsultationCompletePage />} />
          </Route>
        </Route>

        <Route path="category">
          <Route index element={<CategoryPage />} />
          <Route path="result" element={<CategoryResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
