import { ArticleList } from 'components/ArticleList/ArticleList';
import { Header } from 'components/Header/Header';
import { useSavedArticles } from 'features/Article/hooks/useSavedArticle';
import { PageTemplate } from 'templates/PageTemplate';

export const Bookmarks = () => {
	const { data } = useSavedArticles();
	if (!data) {
		return (
			<PageTemplate>
				<Header>Could not fetch articles</Header>
			</PageTemplate>
		);
	}
	return (
		<PageTemplate>
			<Header>Bookmarked articles 📑</Header>
			{data.length === 0 && <p>You dont have saved articles</p>}
			<ArticleList articles={data} />
		</PageTemplate>
	);
};
