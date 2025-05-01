import { Button, Select } from "@/shared/ui";
import { usePostControl } from "../../query/PostDataProvider";
import { useQueryParamsControl } from "@/app/providers/QueryParamsProvider";

export const PostPagination = () => {
  const { limit, setLimit, skip, setSkip } = useQueryParamsControl();
  const { total } = usePostControl();

  const numberLimit = Number(limit);
  const numberSkip = Number(skip);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <Select value={limit.toString()} onValueChange={(value) => setLimit(value)}>
          <Select.Trigger className="w-[180px]">
            <Select.Value placeholder="10" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="10">10</Select.Item>
            <Select.Item value="20">20</Select.Item>
            <Select.Item value="30">30</Select.Item>
          </Select.Content>
        </Select>
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <Button disabled={numberSkip === 0} onClick={() => setSkip(String(Math.max(0, numberSkip - numberLimit)))}>
          이전
        </Button>
        <Button
          disabled={numberSkip + Number(limit) >= total}
          onClick={() => setSkip(String(numberSkip + numberLimit))}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
