import React from 'react'

import { BsFillShieldLockFill } from 'react-icons/bs'
import { BiTrophy, BiDollar,BiTimer } from 'react-icons/bi'
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />

export const featuresData = [
  {
    name: 'Efisiensi Waktu',
    description:
      'Hanya memerlukan waktu singkat untuk setup dan import data tanpa waktu development.',
    icon: iconStyle(BiTimer),
    imgClass: 'one',
  },
  {
    name: 'Efisiensi Biaya',
    description:
      'Tidak perlu biaya investasi infrastruktur TIK (Server, jaringan server, storage, dll).',
    icon: iconStyle(BiDollar),
    imgClass: 'two',
  },
  {
    name: 'Efektifitas Kegiatan',
    description:
      'Efektifitas dalam pelaksanaan, pemantauan, dan evaluasi proses perkuliahan mulai dari penerimaan mahasiswa baru sampai dengan kelulusan karena semua proses dilaksanakan secara terintegrasi dan dilengkapi berbagai format laporan untuk keperluan operasional, manajerial maupun strategis.',
    icon: iconStyle(BiTrophy),
    imgClass: 'four',
  },
  {
    name: 'Jaminan & Keamanan',
    description:
      'Jaminan keberlanjutan dan keamanan sistem karena SIP/SIA BMB dikelola oleh tenaga profesional bidang TIK dan akademik yang berpangalaman puluhan tahun mengelola proses bisnis Perguruan Tinggi Swasta. Sistem dan Platform Mandiri Belajar dimungkinkan dimiliki secara bersama-sama oleh Perguruan Tinggi.Kesiapan adopsi atau adaptasi terhadap Program MBKM dan Kurikulum Berbasis OBE & KKNI.',
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: 'four',
  },
]
