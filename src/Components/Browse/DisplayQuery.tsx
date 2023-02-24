import DisplayQueryLoadinFalse from './DisplayQueryLoadingFalse';
import DisplayQueryLoadinTrue from './DisplayQueryLoadinTrue';

export default function DisplayQuery({
  loading,
  APIResponse,
  index,
}: {
  loading: any;
  APIResponse: any;
  index: any;
}) {
  return (
    <div>
      {!loading ? (
        <DisplayQueryLoadinFalse APIResponse={APIResponse} />
      ) : (
        <DisplayQueryLoadinTrue index={index} />
      )}
    </div>
  );
}
