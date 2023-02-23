import DisplayQueryLoadinFalse from './DisplayQueryLoadingFalse';
import DisplayQueryLoadinTrue from './DisplayQueryLoadinTrue';

export default function DisplayQuery({
  loading,
  APIResponse,
}: {
  loading: any;
  APIResponse: any;
}) {
  return (
    <div>
      {!loading ? (
        <DisplayQueryLoadinFalse APIResponse={APIResponse} />
      ) : (
        <DisplayQueryLoadinTrue />
      )}
    </div>
  );
}
