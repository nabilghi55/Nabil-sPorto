"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const EducationSection = () => {
  const [removeGrayscale, setRemoveGrayscale] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemoveGrayscale(true);
    }, 2000); // 2 detik jeda untuk menghapus grayscale
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mt-10">
      <h1 className="text-3xl font-bold my-3 text-center fade-in">Education</h1>
      <div className="flex items-center space-x-5">
        <Image
          className={`grayscale-initial ${
            removeGrayscale ? "remove-grayscale" : ""
          }`}
          width={100}
          height={80}
          src="/logoub.png"
          alt="Logo Universitas Brawijaya"
        />
        <div className="slide-in">
          <p className="text-justify font-bold text-3xl">
            Universitas Brawijaya
          </p>
          <p>Malang</p>
        </div>
      </div>
      {removeGrayscale && (
        <div className="flex items-center space-x-5 mt-5">
          <Image
            className={`grayscale-initial ${
              removeGrayscale ? "remove-grayscale" : ""
            }`}
            width={150}
            height={100}
            src="/logo_filkom.png"
            alt="Logo Fakultas Ilmu Komputer"
          />
          <div className="slide-in">
            <p className="text-justify font-bold text-3xl">
              Faculty of Computer Science
            </p>
            <p>5th Semester</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
