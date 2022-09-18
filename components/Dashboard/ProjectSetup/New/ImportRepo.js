import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

export default function ImportRepo() {
    const { t } = useTranslation("common");
  return (
<div className="flex w-full justify-between gap-14 px-4 mt-2 border-[1.5px] py-3 rounded-md">

<div className="flex items-center gap-2">
<Image src={"/images/github.png"} width="30" height="30" alt="repo image" ></Image>
<span className="text-[0.9rem] font-medium">my-repository</span>
<div className="flex gap-2 text-gray-400 text-[0.86rem] justify-start items-center">
<span>·</span>
<span>9d ago</span>
</div>
</div>

<div className="flex !justify-end  !items-end">
  <Link href="/new/import">
  <button className="bg-[#0f3dbe] text-white py-1.5 px-4 rounded-md text-[0.9rem]">{t("Import")}</button>
  </Link>
</div>

</div>

  )
}
