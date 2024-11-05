import Link from "next/link";
export default async function Dogpage() {
    let result;

    try {
        const res = await fetch("http://localhost:3000/api/dog");
        // 응답 상태 확인
        if (!res.ok) {
            throw new Error(`HTTP 오류! 상태 코드`);
        }
        result = await res.json();
        console.log(result);
    } catch (error) {
        console.error("에러 발생:", error);
        return <div>에러가 발생했습니다.</div>;
    }
    return (
        <div>
            {result.length > 0 ? (
                <>
                    <img
                        src={result[0].image}
                        alt="강아지"
                    />
                    <p>{result[0].message}</p>
                    <Link href="/">홈으로 돌아가기 </Link>
                </>
            ) : (
                <p>강아지 데이터를 찾을 수 없습니다.</p>
            )}
        </div>
    );
}
