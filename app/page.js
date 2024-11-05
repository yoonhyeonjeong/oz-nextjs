import Link from "next/link";
export default function Home() {
    return (
        <div className="home">
            <h1>골라보세요</h1>
            <ul>
                <li>
                    <Link href="/dog">강아지</Link>
                </li>
                <li>
                    <Link href="/cat">고양이</Link>
                </li>
            </ul>
        </div>
    );
}
