"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#000",
          borderRadius: "12px",
          overflow: "hidden",
          width: "90%",
          maxWidth: "800px",
          marginBottom: "20px",
          aspectRatio: "16 / 9",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/19g66ezsKAg"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
      <button
        onClick={() => router.push("/payment")}
        style={{
          padding: "14px 28px",
          fontSize: "18px",
          color: "#fff",
          backgroundColor: "#FF0000",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        Go to Payment
      </button>
    </div>
  );
}
