import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button/Button';
import { Textarea } from 'components/Textarea/Textarea';
import { useAuth } from 'contexts/AuthProvider';
import {
	InsertCommentType,
	useCreateComment,
} from 'features/Article/hooks/useCreateComment';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

const commentFormSchema = yup.object({
	body: yup.string().required().label('Comment'),
});
type FormFields = yup.InferType<typeof commentFormSchema>;

const CommentForm = () => {
	const { mutate: addComment } = useCreateComment();
	const { id: articleId } = useParams();
	const { user } = useAuth();

	if (!articleId || !user) {
		return <div>User or article id not found</div>;
	}

	const { register, handleSubmit, resetField } = useForm<FormFields>({
		resolver: yupResolver(commentFormSchema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		const commentToInsert: InsertCommentType = {
			body: data.body,
			article_id: articleId,
			user_id: user.id,
		};

		addComment(commentToInsert);

		resetField('body');
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 py-4 px-2"
		>
			<Textarea {...register('body')} label="Add comment" rows={2} />
			<Button fullw={false}>Add comment</Button>
		</form>
	);
};

export { CommentForm };
