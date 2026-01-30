-- CreateTable
CREATE TABLE "Company" (
    "cid" SERIAL NOT NULL,
    "cname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "allData" (
    "ID" TEXT NOT NULL,
    "Scope" TEXT NOT NULL,
    "Level1" TEXT NOT NULL,
    "Level2" TEXT NOT NULL,
    "Level3" TEXT NOT NULL,
    "Level4" TEXT NOT NULL,
    "ColumnText" TEXT NOT NULL,
    "UOM" TEXT NOT NULL,
    "GHGUnit" TEXT NOT NULL,
    "GHGConversionFactor" INTEGER NOT NULL,

    CONSTRAINT "allData_pkey" PRIMARY KEY ("ID")
);
